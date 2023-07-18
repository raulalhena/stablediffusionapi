import dotenv from 'dotenv';

dotenv.config();

const URL = 'https://stablediffusionapi.com/api/v3/img2img';

const options = {
    'method': 'POST',
    'headers': {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "key": process.env.API_KEY,
      "prompt": "convert image to cartoon",
      "negative_prompt": null,
      "init_image": "https://raw.githubusercontent.com/raulalhena/soundwave/main/public/assets/covers.jpg",
      "width": "512",
      "height": "512",
      "samples": "1",
      "num_inference_steps": "30",
      "safety_checker": "no",
      "enhance_prompt": "yes",
      "guidance_scale": 7.5,
      "strength": 0.7,
      "seed": null,
      "webhook": null,
      "track_id": null
    })
  };

  const getImg = async () => {
      const response = await fetch(URL, options);
      const result = await response.json();

      console.log(result);
  }
  
  getImg();