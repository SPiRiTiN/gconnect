$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010 Q1',
            citibank: 2666,
            citigroup: null,
            citi: 2647
        }, {
            period: '2010 Q2',
            citibank: 2778,
            citigroup: 2294,
            citi: 2441
        }, {
            period: '2010 Q3',
            citibank: 4912,
            citigroup: 1969,
            citi: 2501
        }, {
            period: '2010 Q4',
            citibank: 3767,
            citigroup: 3597,
            citi: 5689
        }, {
            period: '2011 Q1',
            citibank: 6810,
            citigroup: 1914,
            citi: 2293
        }, {
            period: '2011 Q2',
            citibank: 5670,
            citigroup: 4293,
            citi: 1881
        }, {
            period: '2011 Q3',
            citibank: 4820,
            citigroup: 3795,
            citi: 1588
        }, {
            period: '2011 Q4',
            citibank: 15073,
            citigroup: 5967,
            citi: 5175
        }, {
            period: '2012 Q1',
            citibank: 10687,
            citigroup: 4460,
            citi: 2028
        }, {
            period: '2012 Q2',
            citibank: 8432,
            citigroup: 5713,
            citi: 1791
        }],
        xkey: 'period',
        ykeys: ['citibank', 'citigroup', 'citi'],
        labels: ['citibank', 'citigroup', 'citi'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Positive",
            value: 45
        }, {
            label: "Neutral",
            value: 18
        }, {
            label: "Negative",
            value: 37
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });

});
