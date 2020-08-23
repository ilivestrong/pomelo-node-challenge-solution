const singleRootElementJSON = {
  "0": [
    {
      "id": 10,
      "title": "House",
      "level": 0,
      "children": [],
      "parent_id": null
    }
  ],
  "1": [
    {
      "id": 12,
      "title": "Red Roof",
      "level": 1,
      "children": [],
      "parent_id": 10
    },
    {
      "id": 18,
      "title": "Blue Roof",
      "level": 1,
      "children": [],
      "parent_id": 10
    },
    {
      "id": 13,
      "title": "Wall",
      "level": 1,
      "children": [],
      "parent_id": 10
    }
  ],
  "2": [
    {
      "id": 17,
      "title": "Blue Window",
      "level": 2,
      "children": [],
      "parent_id": 12
    },
    {
      "id": 16,
      "title": "Door",
      "level": 2,
      "children": [],
      "parent_id": 13
    },
    {
      "id": 15,
      "title": "Red Window",
      "level": 2,
      "children": [],
      "parent_id": 12
    }
  ],
  "3": [
    {
      "id": 21,
      "title": "Plain glass",
      "level": 3,
      "children": [],
      "parent_id": 17
    },
    {
      "id": 22,
      "title": "Tempered Glass",
      "level": 3,
      "children": [],
      "parent_id": 17
    },
    {
      "id": 25,
      "title": "Wooden Door",
      "level": 3,
      "children": [],
      "parent_id": 16
    }
  ]
}

const multipleRootElementJSON = {
  "0": [
    {
      "id": 10,
      "title": "House",
      "level": 0,
      "children": [],
      "parent_id": null
    },
    {
      "id": 11,
      "title": "Big House",
      "level": 0,
      "children": [],
      "parent_id": null
    }
  ],
  "1": [
    {
      "id": 12,
      "title": "Red Roof",
      "level": 1,
      "children": [],
      "parent_id": 10
    },
    {
      "id": 18,
      "title": "Blue Roof",
      "level": 1,
      "children": [],
      "parent_id": 10
    },
    {
      "id": 13,
      "title": "Wall",
      "level": 1,
      "children": [],
      "parent_id": 10
    }
  ],
  "2": [
    {
      "id": 17,
      "title": "Blue Window",
      "level": 2,
      "children": [],
      "parent_id": 12
    },
    {
      "id": 16,
      "title": "Door",
      "level": 2,
      "children": [],
      "parent_id": 13
    },
    {
      "id": 15,
      "title": "Red Window",
      "level": 2,
      "children": [],
      "parent_id": 12
    }
  ],
  "3": [
    {
      "id": 21,
      "title": "Plain glass",
      "level": 3,
      "children": [],
      "parent_id": 17
    },
    {
      "id": 22,
      "title": "Tempered Glass",
      "level": 3,
      "children": [],
      "parent_id": 17
    },
    {
      "id": 25,
      "title": "Wooden Door",
      "level": 3,
      "children": [],
      "parent_id": 16
    }
  ]
}

module.exports = {
  singleRootElementJSON,
  multipleRootElementJSON
}