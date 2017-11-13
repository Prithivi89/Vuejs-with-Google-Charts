
  import LineChart from './LineChart.js'
  import {GoogleCharts} from 'google-charts';

  export default {
    components: {
      LineChart
    },
    data () {
      return {
        datacollection: null
      }
    },
    mounted () {
      this.fillData()
      this.drawChart1()
    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: [this.getRandomInt(), this.getRandomInt()],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt()]
            }, {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt()]
            }
          ]
        }
      },

      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      },

      drawChart1(){
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(function() 
      {     
          var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     11],
          ['Eat',      2],
          ['Commute',  2],
          ['Watch TV', 2],
          ['Sleep',    7]
          ]);

        var options = { title: 'My Daily Activities'  };
        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
      });
      },

    drawChart2(){
      
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(function() 
      {    
          var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     11],
          ['Eat',      2],
          ['Commute',  2],
          ['Watch TV', 2],
          ['Sleep',    7]
          ]);

        var options = { title: 'My Daily Activities'  };
        var chart = new google.visualization.PieChart(document.getElementById('piechart2'));
        chart.draw(data, options);
      });
      },

        drawChart3(){
      
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(function() 
      {    
          var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     11],
          ['Eat',      2],
          ['Commute',  2],
          ['Watch TV', 2],
          ['Sleep',    7]
          ]);

        var options = { title: 'My Daily Activities'  };
        var chart = new google.visualization.PieChart(document.getElementById('piechart3'));
        chart.draw(data, options);
      });
      },

        drawChart4(){
      
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(function() 
      {   
          var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     11],
          ['Eat',      2],
          ['Commute',  2],
          ['Watch TV', 2],
          ['Sleep',    7]
          ]);

        var options = { title: 'My Daily Activities'  };
        var chart = new google.visualization.PieChart(document.getElementById('piechart4'));
        chart.draw(data, options);
      });
      },

    }
  }
