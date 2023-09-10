import React from 'react'
import { useState } from 'react'
import { socials } from '../constants'

function ContactDropdown() {
  return (
      <div className='dropdown'>
          <div>
              {socials.title}
          </div>
    </div>
  )
}

export default ContactDropdown
