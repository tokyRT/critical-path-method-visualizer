export default [
    {
        id: '0',
        data: { earliestDate: 12, latestDates: {A: 23, B: 34, C: 111}},
        position: { x: 50, y: 250 },
        type: 'startNode'
    },
    {
        id: '1',
        data: { earliestDate: 3, latestDates: {A: 23, B: 34, C: 111} },
        position: { x: 250, y: 250 },
        type: 'stepNode'
    },

    {
        id: '2',
        // you can also pass a React component as a label
        data: { earliestDate: 37, latestDates: {A: 23, B: 34, C: 111} },
        position: { x: 600, y: 300 },
        type: 'stepNode'
    },
    {
        id: '3',
        data: { earliestDate: 12, latestDates: {A: 23, B: 34, C: 111} },
        position: { x: 950, y: 250 },
        type: 'stepNode'
    },
    {
        id: 'end',
        data: { earliestDate: 12},
        position: { x: 1150, y: 250 },
        type: 'endNode'
    },
];