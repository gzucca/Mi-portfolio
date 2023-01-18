"use client";
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { BsFillMoonStarsFill, BsSun } from 'react-icons/bs'

const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        theme  === 'dark' ? (<BsFillMoonStarsFill onClick={() => setTheme('light')} className='cursor-pointer text-3xl text-white' />) : (<BsSun onClick={() => setTheme('dark')} className='cursor-pointer text-3xl text-black' />)
    )
}

{/* <select value={theme} className='text-black bg-white text-sm' onChange={e => setTheme(e.target.value)}>
<option value="system">System</option>
<option value="dark">Dark</option>
<option value="light">Light</option>
</select> */}

export default ThemeSwitch