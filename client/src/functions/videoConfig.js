

export default async function videoConfig (streamURL) {
    const play = {
        fill: true,
        fluid: true,
        autoplay: true,
        controls: true,
        preload: "metadata",
        responsive: true,
        
        sources: [
          {
            src: `https://video5.mayapur.tv/${streamURL}/chunklist.m3u8`,
            type: "application/x-mpegURL"
          }
        ]
      };

      return play
}