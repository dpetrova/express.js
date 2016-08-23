// Get a particular hero
exports.get = function(id, cb) {
    cb(null, {
        id:id,
        name: 'Hero1',
        rank: 'Warrior'
    })
};

// Get all heroes
exports.all = function(cb) {
    cb(null, [
        {
            id:1,
            name: 'Hero1',
            rank: 'Warrior'
        },
        {
            id:2,
            name: 'Hero2',
            rank: 'Wizard'
        },
        {
            id:3,
            name: 'Hero3',
            rank: 'Ranger'
        }
    ])
};

