import React from 'react'
import Chord from '../../../Chord'
import { Link } from 'react-router'

const guitar = require('@tombatossals/chords-db/lib/guitar.json')

const Variations = ({ params }) => {
  const chord = guitar.chords[params.key].find(chord => chord.suffix === params.suffix)
  return (
    <div>
      <h2><Link to={`/react-chords/${params.instrument}/chords/${params.key}`}>Return to key {params.key.replace('sharp', '#')}</Link></h2>
      <div className='Chords'>
        {chord.positions.map((position, index) =>
          <Chord key={index} chord={chord} version={index + 1} />)}
      </div>
    </div>)
}

Variations.propTypes = {
  params: React.PropTypes.object
}

export default Variations

