const N = 4096;
const t_buffer = new Float32Array(N);




const N_2 = N / 2;
const f_buffer = new Float32Array(N / 2);




function L2() {
  let rms = 0;

  for (let val of t_buffer) {
    rms += val * val;
  }
  return Math.sqrt(rms / N);
}




function getPeriod() {
  if (L2() < 0.01) { return Infinity; }


  let arg_max_f_buffer;
  let     max_f_buffer;

  {
    let k = 0;

    arg_max_f_buffer =          k;
        max_f_buffer = f_buffer[k++];

    for (; k < N_2; ++k) {
      if (f_buffer[k] > max_f_buffer) {
          arg_max_f_buffer =          k;
              max_f_buffer = f_buffer[k];
      }
    }
  }

  /*
   The period is about
   N / arg_max_f_buffer
   samples. Multiplying
   by 2 / 3 gives a smaller
   quantity and multiplies the
   corresponding frequency by
   3 / 2 which avoids going up
   to the second harmonic.
  */
  const lower_bound =          Math.floor((2 * N) / (3 * arg_max_f_buffer + 1));
//const upper_bound = Math.min(Math.floor((5 * N) / (2 * arg_max_f_buffer + 1)), N);


  const auto_corr = new Float32Array(N).fill(0);

  for (let i = lower_bound; i < N; ++i) {
    for (let j = 0; i + j < N; ++j) {
      auto_corr[i] += t_buffer[i + j] * t_buffer[j];
    }
  }


  let arg_max_auto_corr;
  let     max_auto_corr;

  {
    let k = lower_bound;

    arg_max_auto_corr =           k;
        max_auto_corr = auto_corr[k++];

    for (; k < N; ++k) {
      if (auto_corr[k] > max_auto_corr) {
          arg_max_auto_corr =           k;
              max_auto_corr = auto_corr[k];
      }
    }
  }


  if (arg_max_auto_corr === 0)     { return Infinity; }
  if (arg_max_auto_corr === N - 1) { return Infinity; }


  const val_l = auto_corr[arg_max_auto_corr - 1];        //       p(-1)
  const val_0 = auto_corr[arg_max_auto_corr    ];        //       p( 0)
  const val_r = auto_corr[arg_max_auto_corr + 1];        //       p(+1)

  const a = (val_r + val_l) / 2 - val_0;                 //   fit p(x) =  
  const b = (val_r - val_l) / 2;                         // a x^2 + b x + c

  return arg_max_auto_corr - b / (2 * a);                //       a < 0
}




async function startMicrophone() {
  const audioContext = new AudioContext();
  const sampleRate = audioContext.sampleRate;
  const analyser   = audioContext.createAnalyser();
  analyser.fftSize = N;

  function updateFrequency() {
    analyser.getFloatTimeDomainData(t_buffer);
    analyser.getFloatFrequencyData(f_buffer);
    document.getElementById('frequency').innerHTML = sampleRate / getPeriod();
    setTimeout(updateFrequency, 100);
  }

  const stream = await navigator.mediaDevices.getUserMedia(USER_MEDIA_CONSTRAINTS);
  audioContext.createMediaStreamSource(stream).connect(analyser);
  updateFrequency();
}

document.getElementById('startMicrophone').addEventListener('click', startMicrophone);




const USER_MEDIA_CONSTRAINTS = {
  audio: {
    mandatory: {
      googEchoCancellation: 'false',
      googAutoGainControl: 'false',
      googNoiseSuppression: 'false',
      googHighpassFilter: 'false',
    }
  }
}
