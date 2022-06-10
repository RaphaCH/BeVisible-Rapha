import Image from 'next/image';

export default function ProfilePhoto({ onClick, url = "/images/personIcon.png", onChange }) {
    return (
        <div onClick={onClick}>
            <input className='hidden' id='uploadFile'  type='file' onChange={e => onChange(e)} />
            <label htmlFor='uploadFile'>
                <Image
                    alt="profil"
                    src={url}
                    width={100}
                    height={100}
                    className="mx-auto object-cover rounded-full"
                />
            </label>
        </div>
    )
}