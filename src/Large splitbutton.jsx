import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function Large_splitbutton () {
  return (
    <div>
      <div className="btn-group">
        <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Large button
        </button>
        <ul className="dropdown-menu">
          <li className='dropdown-item'><button type='button'>mutee ullah channer</button></li>
        </ul>
      </div>

      <div className="btn-group">
        <button className="btn btn-info btn-lg" type="button">
          Large split button
        </button>
        <button type="button" className="btn btn-lg btn-dark dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
          <span className="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul className="dropdown-menu">
          
          <li button='dropdown-item'></li>malik ata ullah channer </ul>
      </div>
    </div>
  )
}

export default Large_splitbutton