import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import { songsData } from '../assets/assets'
import SOngItem from './SOngItem'
import { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'
const DisplayHome = () => {
  const {songsData,albumsData} = useContext(PlayerContext)
  return (
    <>
      <Navbar/>
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        <div className='flex overflow-auto'>
        {
            albumsData.map((album,index)=>(
                <AlbumItem key={index} name={album.name} desc={album.desc} id={album._id} image={album.image}/>
            ))
        }
        </div>
       
      </div>
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Today's biggest hits</h1>
        <div className='flex overflow-auto'>
        {
          songsData.map((song,index)=>(
            <SOngItem key={index} name={song.name} image={song.image} id={song._id} desc={song.desc} />
          ))
        }
        </div>
       
      </div>
    </>
  )
}

export default DisplayHome
