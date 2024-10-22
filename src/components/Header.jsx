import React, { useState } from 'react'
import { FaBed } from "react-icons/fa";
import { IoAirplaneSharp } from "react-icons/io5";
import { FaCar } from "react-icons/fa6";
import { FaTaxi } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns';

function Header() {
    const[openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const[openOptions, setOpenOptions] = useState(false)
  const[options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  })

  return (
    <div className='header bg-[#003580] text-white flex justify-center relative'>
        <div className='headerContainer w-full max-w-[1024px] mt-5 mx-0 mb-24'>
            <div className='headerList flex gap-10 mb-12'>
                <div className='headerListItem flex items-center gap-2  active  border py-[7px] px-4 rounded-full'>
                    <FaBed />
                    <span>Stays</span>
                </div>
                <div className='headerListItem flex items-center gap-2'>
                    <IoAirplaneSharp />
                    <span>Flights</span>
                </div>
                <div className='headerListItem flex items-center gap-2'>
                    <FaCar />
                    <span>Car rentals</span>
                </div>
                <div className='headerListItem flex items-center gap-2'>
                    <FaBed />
                    <span>Attractions</span>
                </div>
                <div className='headerListItem flex items-center gap-2'>
                    <FaTaxi />
                    <span>Airport taxis</span>
                </div>
            </div>
            <h1 className='headerTitle font-bold text-3xl'>Alifetime of discounts? It's Genius.</h1>
            <p className='headerDescription my-5 mx-0'>Get reward for your travels - unlock instant savings of 10% or more with a free Lanmbooking account</p>
            <button className='headerBtn bg-[#0071c2] font-semibold border-none cursor-pointer p-2'>Sign in / Register</button>
            <div className='headerSearch h-[40px] bg-white text-gray-400 border-[3px] border-[#febb02] flex items-center justify-around py-6 px-0 rounded absolute -bottom-6 w-full max-w-[1024px]'>
                <div className='headerSearchItem flex items-center gap-2'>
                    <FaBed />
                    <input type="text" placeholder='Where are you going?' className='headerSearchInput border-none outline-none'/>
                </div>
                <div className='headerSearchItem flex items-center gap-2' onClick={() => setOpenDate(!openDate)}>
                    <FaRegCalendarAlt />
                    <span className='headerSearchText cursor-pointer'>{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}</span>
                    {
                        openDate && 
                        <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className='date absolute  top-12'
                        />
                    }
                </div>
                <div className='headerSearchItem flex items-center gap-2'>
                    <FaPerson />
                    <span className='headerSearch text-gray-400'>{`${options.adult} Adult . ${options.children} Children . ${options.room} Room`}</span>
                    <div className='options absolute top-12 bg-white text-gray-400 rounded p shadow-[0_0_10px_-5px_rgba(0,0,0,0.4)] p-2'>
                        <div className='optionsItems w-[200px] flex justify-between m-2'>
                            <span className='optionsText'>Adult</span>
                            <div className='optionCounter flex items-center gap-2 text-[14px] text-black'>
                                <button className='optionsCounterButton w-[30px] h-[30px] rounded border-[#0071c2] text-[#0071c2] cursor-pointer text-[17px] border-[2px] font-semibold px-1' onClick={() => handleOption('adult', 'd')}>-</button>
                                <span className='optionsCounterNumber  '>1</span>
                                <button className='optionsCounterButton w-[30px] h-[30px] rounded border-[#0071c2] text-[#0071c2] cursor-pointer text-[17px] border-[2px] font-semibold px-1' onClick={() => handleOption('adult', 'i')}>+</button>
                            </div>
                        </div>
                        <div className='optionsItems w-[200px] flex justify-between m-2'>
                            <span className='optionsText'>Children</span>
                            <div className='optionCounter flex items-center gap-2 text-[14px] text-black'>
                                <button className='optionsCounterButton w-[30px] h-[30px] rounded border-[#0071c2] text-[#0071c2] cursor-pointer border-[2px] text-[17px] font-semibold px-1' onClick={() => handleOption('children', 'd')}>-</button>
                                <span className='optionsCounterNumber  '>0</span>
                                <button className='optionsCounterButton w-[30px] h-[30px] rounded border-[#0071c2] text-[#0071c2] cursor-pointer border-[2px] text-[17px] font-semibold  px-1' onClick={() => handleOption('children', 'i')}>+</button>
                            </div>
                        </div>
                        <div className='optionsItems w-[200px] flex justify-between m-2'>
                            <span className='optionsText'>Room</span>
                            <div className='optionCounter flex items-center gap-2 text-[14px] text-black'>
                                <button className='optionsCounterButton w-[30px] h-[30px] rounded border-[#0071c2] text-[#0071c2] cursor-pointer border-[2px] text-[17px] font-semibold px-1' onClick={() => handleOption('room', 'd')}>-</button>
                                <span className='optionsCounterNumber  '>0</span>
                                <button className='optionsCounterButton w-[30px] h-[30px] rounded border-[#0071c2] text-[#0071c2] cursor-pointer border-[2px] text-[17px] font-semibol px-1' onClick={() => handleOption('room', 'i')}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='headerSearchItem flex items-center gap-2'>
                   <button className='headerBtn bg-[#0071c2] text-white border-none cursor-pointer px-2 py-1'>Search</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header