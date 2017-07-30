let pie = document.getElementById('piechart').getContext('2d');
let bar = document.getElementById('barchart').getContext('2d');
let line = document.getElementById('linechart').getContext('2d');
let radar = document.getElementById('radarchart').getContext('2d');
let doughnut = document.getElementById('doughnutchart').getContext('2d');


//Global Options
Chart.defaults.global.defaultFontFamily= 'Lato';
Chart.defaults.global.defaultFontSize= 18;
Chart.defaults.global.defaultFontColor= '#777';

let ohioPie = new Chart(pie, {
  type:'pie', //bar horizontalBar, pie, line, doughtnut, radar, polarArea
  data:{
    labels:['Columbus', 'Cleveland', 'Cincinnati', 'Toledo', 'Akron'],
    datasets:[{
      label:'Population',
      data:[
        860090,
        385809,
        298800,
        278508,
        197633
      ],
     // backgroundColor:'green' Can take hex, named, rgba/rgb values for color
     backgroundColor:[ 'rgba(190, 44, 44, 0.6)', 'rgba(42, 187, 78, 0.6)', 'rgba(42, 82, 192, 0.6)', 'rgba(49, 183, 190, 0.6)','rgba(188, 144, 51, 0.6)'
     ],
    borderWidth:1,
    borderColor:'#777',
    hoverBorderWidth:2,
    hoverBorderColor:'#000'
    }]
  },
  options:{
    title:{
      display:true,
      text:'Largest Cities in Ohio 2014',
      fontSize:25,
    },
    legend:{
      display:true,
      position:'right',
      labels:{
        fontColor:'#000'
      }
    },
    layout:{
      padding:{
        left:50,
        right:0,
        bottom:0,
        top:0
      },
      tooltips:{
        enabled:true
      }
    }
  }
});

let ohioBar = new Chart(bar, {
  type:'bar', //bar horizontalBar, pie, line, doughtnut, radar, polarArea
  data:{
    labels:['Columbus', 'Cleveland', 'Cincinnati', 'Toledo', 'Akron'],
    datasets:[{
      label:'Population',
      data:[
        860090,
        385809,
        298800,
        278508,
        197633
      ],
     // backgroundColor:'green' Can take hex, named, rgba/rgb values for color
     backgroundColor:[ 'rgba(190, 44, 44, 0.6)', 'rgba(42, 187, 78, 0.6)', 'rgba(42, 82, 192, 0.6)', 'rgba(49, 183, 190, 0.6)','rgba(188, 144, 51, 0.6)'
     ],
    borderWidth:1,
    borderColor:'#777',
    hoverBorderWidth:2,
    hoverBorderColor:'#000'
    }]
  },
  options:{
    title:{
      display:true,
      text:'Largest Cities in Ohio 2014',
      fontSize:25,
    },
    legend:{
      display:false,
      position:'right',
      labels:{
        fontColor:'#000'
      }
    },
    layout:{
      padding:{
        left:50,
        right:0,
        bottom:0,
        top:0
      },
      tooltips:{
        enabled:true
      }
    }
  }
});


let ohioLine = new Chart(line, {
  type:'line', //bar horizontalBar, pie, line, doughtnut, radar, polarArea
  data:{
    labels:['Columbus', 'Cleveland', 'Cincinnati', 'Toledo', 'Akron'],
    datasets:[{
      label:'Population',
      data:[
        860090,
        385809,
        298800,
        278508,
        197633
      ],
     // backgroundColor:'green' Can take hex, named, rgba/rgb values for color
     backgroundColor:['rgba(42, 82, 192, 0.6)', 'rgba(49, 183, 190, 0.6)','rgba(188, 144, 51, 0.6)'
     ],
    borderWidth:1,
    borderColor:'#777',
    hoverBorderWidth:2,
    hoverBorderColor:'#000'
    }]
  },
  options:{
    title:{
      display:true,
      text:'Largest Cities in Ohio 2014',
      fontSize:25,
    },
    legend:{
      display:false,
      position:'right',
      labels:{
        fontColor:'#000'
      }
    },
    layout:{
      padding:{
        left:50,
        right:0,
        bottom:0,
        top:0
      },
      tooltips:{
        enabled:true
      }
    }
  }
});
let ohioDoughnut = new Chart(doughnut, {
  type:'doughnut', //bar horizontalBar, pie, line, doughtnut, radar, polarArea
  data:{
    labels:['Columbus', 'Cleveland', 'Cincinnati', 'Toledo', 'Akron'],
    datasets:[{
      label:'Population',
      data:[
        860090,
        385809,
        298800,
        278508,
        197633
      ],
     // backgroundColor:'green' Can take hex, named, rgba/rgb values for color
     backgroundColor:[ 'rgba(190, 44, 44, 0.6)', 'rgba(42, 187, 78, 0.6)', 'rgba(42, 82, 192, 0.6)', 'rgba(49, 183, 190, 0.6)','rgba(188, 144, 51, 0.6)'
     ],
    borderWidth:1,
    borderColor:'#777',
    hoverBorderWidth:2,
    hoverBorderColor:'#000'
    }]
  },
  options:{
    title:{
      display:true,
      text:'Largest Cities in Ohio 2014',
      fontSize:25,
    },
    legend:{
      display:true,
      position:'left',
      labels:{
        fontColor:'#000'
      }
    },
    layout:{
      padding:{
        left:50,
        right:0,
        bottom:0,
        top:0
      },
      tooltips:{
        enabled:true
      }
    }
  }
});




let ohioRadar = new Chart(radar, {
  type:'radar', //bar horizontalBar, pie, line, doughtnut, radar, polarArea
  data:{
    labels:['Columbus', 'Cleveland', 'Cincinnati', 'Toledo', 'Akron'],
    datasets:[{
      label:'Population',
      data:[
        860090,
        385809,
        298800,
        278508,
        197633
      ],
     // backgroundColor:'green' Can take hex, named, rgba/rgb values for color
     backgroundColor:[ 'rgba(42, 187, 78, 0.6)', 'rgba(42, 82, 192, 0.6)', 'rgba(49, 183, 190, 0.6)','rgba(188, 144, 51, 0.6)'
     ],
    borderWidth:1,
    borderColor:'#777',
    hoverBorderWidth:2,
    hoverBorderColor:'#000'
    }]
  },
  options:{
    title:{
      display:true,
      text:'Largest Cities in Ohio 2014',
      fontSize:25,
    },
    legend:{
      display:false,
      position:'right',
      labels:{
        fontColor:'#000'
      }
    },
    layout:{
      padding:{
        left:50,
        right:0,
        bottom:0,
        top:0
      },
      tooltips:{
        enabled:true
      }
    }
  }
});


