import React from 'react'
import { useState } from 'react';
import {BsBackspace} from 'react-icons/bs'
function Calculator() {

  const [calc, setCalc] = useState("");
	const [result, setResult] = useState("");

	const ops = ['/', '*', '-', '+', '.'];

	const createDigits = () => {
		const digits = [];

		for (let i = 1; i < 10; i++) {
			digits.push(<button className='px-1 py-3 bg-[#1d2635] hover:bg-white/10 shadow shadow-gray-700 rounded-xl border-2 border-[#1d2635]' onClick={() => updateCalc(i.toString())} key={i}>{i}</button>);
		}

		return digits;
	}

	const updateCalc = (value) => {
		if (
			(ops.includes(value) && (calc === '')) || 
			(ops.includes(value) && ops.includes(calc.slice(-1)))
		) {
			
			return;
		}
		
		setCalc(calc + value);

		if (!ops.includes(value)) {
			setResult(eval(calc + value).toString());
		}
	}

	const calculate = () => {
		setCalc(eval(calc).toString());
	}

	const deleteLast = () => {
    if (calc === '') {
      return;
    }
  
    const value = calc.slice(0, -1);
  
    setCalc(value);
    setResult(eval(value) ? eval(value).toString() : '');
  };

  const clearAll = () => {
    setCalc('');
    setResult('');
  };

	return (
		<div className=" flex flex-col justify-center  items-center font-mono shadow-2xl rounded-r-3xl h-full ">
			<div className="p-8 rounded-3xl bg-[#161f30] space-y-4 shadow-2xl">
				<div className=" font-mono text-3xl justify-end flex items-baseline p-5 bg-[#87a174] rounded-2xl border-8 shadow-white  border-[#1d2635]">
					<span className='text-black/50 text-base mr-2'>{result ? '(' + result + ')' : ''}</span> {calc || 0}
				</div>

				<div className="bg-[#161f30]  flex space-x-4 text-[#edf1f7] font-mono font-bold text-lg ">
					<button className='px-5 py-2  rounded-full bg-[#1d2635] hover:bg-white/10 shadow shadow-gray-700' onClick={() => updateCalc('/')}>/</button>
					<button className='px-5 py-2 rounded-full bg-[#1d2635] hover:bg-white/10 shadow shadow-gray-700' onClick={() => updateCalc('*')}>x</button>
					<button className='px-5 py-2 rounded-full bg-[#1d2635] hover:bg-white/10 shadow shadow-gray-700' onClick={() => updateCalc('-')}>-</button>
					<button className='px-5 py-2 rounded-full bg-[#1d2635] hover:bg-white/10 shadow shadow-gray-700 ' onClick={() => updateCalc('+')}>+</button>

				</div>

				<div className="grid grid-cols-3 gap-4 grid-rows-4 text-[#edf1f7] ">
					{createDigits()}
					<button  className='px-2 py-3 bg-[#1d2635] hover:bg-white/10 rounded-xl border-2 shadow shadow-gray-700 border-[#1d2635]' onClick={() => updateCalc('0')}>0</button>
					<button className='px-2 py-3 bg-[#1d2635] hover:bg-white/10 rounded-xl border-2 shadow shadow-gray-700 border-[#1d2635]' onClick={() => updateCalc('.')}>.</button>
					<button className='px-2 py-3 hover:bg-violet-950/40 hover:text-violet-500 bg-[#1d2635] rounded-xl border-2 border-[#1d2635] shadow shadow-gray-700 ' onClick={calculate}>=</button>
				</div>

        <div className=' text-[#edf1f7] flex justify-between space-x-4 '>
         <button
            className="px-2 py-3 w-1/2 bg-[#1d2635]  hover:bg-white/10 rounded-xl border-2  border-[#1d2635] shadow shadow-gray-700 "
            onClick={clearAll}
          >
            Clear
          </button>
					<button className='px-2 py-3 w-1/2 bg-[#1d2635] hover:bg-red-900/40 hover:text-red-600  rounded-xl border-2 border-[#1d2635] shadow shadow-gray-700 flex justify-center items-center text-xl ' onClick={deleteLast}> <BsBackspace/> </button>

        </div>
			</div>
		</div>
	);


};

export default Calculator
