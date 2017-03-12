/*Javascript代码片段*/
  var segmentedControlBtn = $('.btn-segmented-control');
        var walkingDistanceGraphCtx = $("#walking-distance");
        var stepsGraphCtx = $("#steps");
        var graphCard = $('.graph-card');

        dragula([document.getElementById("drag-container")]);


        segmentedControlBtn.on('click', function() {
            var interval = $(this).data('interval');
            segmentedControlBtn.not(this).removeClass('active');
            $(this).addClass('active');
            updateCharts(interval);
        });

        function updateCharts(interval) {
            for (var i = 0; i < 6; i++) {
                walkingDistanceGraph.data.datasets[0].data[i] = generateRandomNumber(0, 100);
                stepsGraph.data.datasets[0].data[i] = generateRandomNumber(0, 100);
            }

            walkingDistanceGraph.update();
            stepsGraph.update();
        }

        function generateRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }

        function generateRandomData() {
            var data = [];
            for (var i = 0; i < 6; i++) {
                data.push(generateRandomNumber(0, 100));
            }

            return data;
        }


        var canvasEl = document.getElementById("walking-distance").getContext("2d");

        var defaultGradient = canvasEl.createLinearGradient(0, 0, 0, 250);
        defaultGradient.addColorStop(0, 'rgba(255,255,255,.35)');
        defaultGradient.addColorStop(1, 'rgba(255,255,255,0)');

        var activeGradient = canvasEl.createLinearGradient(0, 0, 0, 250);
        activeGradient.addColorStop(0, 'rgba(255,255,255,.55)');
        activeGradient.addColorStop(1, 'rgba(255,255,255,0)');

        var walkingDistanceData = {
            labels: ['1', '2', '3', '4', '5', '6'],
            datasets: [{
                backgroundColor: defaultGradient,
                hoverBackgroundColor: activeGradient,
                data: generateRandomData(),
            }]
        };

        Chart.defaults.scale.type = 'Time';
        Chart.defaults.scale.gridLines.display = false;
        Chart.defaults.scale.gridLines.color = 'rgba(255,255,255, .2)';
        Chart.defaults.global.showLines = false;
        Chart.defaults.global.responsive = false;
        Chart.defaults.global.tooltips.enabled = false;
        Chart.defaults.global.defaultFontColor = "rgba(255,255,255, .55)";
        Chart.defaults.global.legend.display = false;
        Chart.defaults.bar.scales.yAxes[0].display = false
        Chart.defaults.bar.scales.yAxes[0].display = false

        var defaultChartData = {
            type: 'bar',
            data: walkingDistanceData,
            options: {
                scales: {
                    xAxes: [{
                        barPercentage: 0.2,
                    }]
                }
            }
        };
        var stepsGraph = new Chart(stepsGraphCtx, defaultChartData);

        var walkingDistanceGraph = new Chart(walkingDistanceGraphCtx, defaultChartData);