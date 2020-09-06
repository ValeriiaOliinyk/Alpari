$(document).ready(function () {
  var entries = [
    {
      label: 'данные',
      url: '#data',
      target: '_top',
    },
    { label: 'технологи', url: '#technology', target: '_top' },
    {
      label: 'энвайромент',
      url: '#environment',
      target: '_top',
    },
    { label: 'обучение', url: '#training', target: '_top' },
    {
      label: 'сопровождение',
      url: '#accompaniment',
      target: '_top',
    },
    {
      label: 'новости',
      url: '#news',
      target: '_top',
    },
    { label: 'комьюнити', url: '#community', target: '_top' },
  ];

  var settings = {
    entries: entries,
    width: 280,
    height: 280,
    radius: '65%',
    radiusMin: 75,
    bgDraw: true,
    bgColor: '#ffffff00',
    opacityOver: 1.0,
    opacityOut: 0.05,
    opacitySpeed: 2,
    fov: 800,
    speed: 0.8,
    fontFamily: 'Oswald, Arial, sans-serif',
    fontSize: '14',
    fontColor: '#fff',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    fontToUpperCase: true,
    tooltipFontFamily: 'Oswald, Arial, sans-serif',
    tooltipFontSize: '11',
    tooltipFontColor: '#fff',
    tooltipFontWeight: 'normal',
    tooltipFontStyle: 'normal',
    tooltipFontStretch: 'normal',
    tooltipFontToUpperCase: false,
    tooltipTextAnchor: 'left',
    tooltipDiffX: 0,
    tooltipDiffY: 10,
  };
  $('#holder').svg3DTagCloud(settings);
});
