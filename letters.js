// Each letter is comprised of 4 quadratic bezier curves. The end point of each curve is the start point of the next one, thus a letter is one continuous line.

var letters = {
  'Nil': [
    [ [300, 250], [300, 250], [300, 250], [300, 250] ],
    [ [300, 250], [300, 250], [300, 250], [300, 250] ],
    [ [300, 250], [300, 250], [300, 250], [300, 250] ],
    [ [300, 250], [300, 250], [300, 250], [300, 250] ]
  ],
  'A': [
    [ [376, 120], [333, 58 ], [248, 95 ], [232, 161] ],
    [ [232, 161], [228, 176], [279, 213], [315, 214] ],
    [ [315, 214], [367, 215], [376, 176], [378, 139] ],
    [ [378, 139], [381, 108], [408, 240], [403, 226] ]
  ],
  'B': [
    [ [246, 91 ], [246, 76 ], [245, 320], [247, 335] ],
    [ [247, 335], [249, 354], [253, 208], [345, 221] ],
    [ [345, 221], [456, 237], [355, 367], [341, 372] ],
    [ [341, 372], [303, 385], [246, 374], [247, 335] ]
  ]
}
