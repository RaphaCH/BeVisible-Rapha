import Image from 'next/image';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faPhone, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Card({ email = 'test@test.com', firstName = 'Raphael', lastName = 'Castagna Haasper', position = 'Web Dev', aboutMe = 'About', phone = '2345678', city = 'city', badges }) {

    const activeBadges = badges.filter(badge => badge.isActive === true);

    const mappedBadges = activeBadges.map(activeBadge => {
        return <FontAwesomeIcon icon={activeBadge.name} className='text-base badge-true mx-1 my-0 mt-4 ' />
    })

    return (
        <div className="w-60 bg-white shadow-lg rounded-lg overflow-hidden my-4">
            <div className="aspect-w-10 aspect-h-10 bg-gray-100">
                <Image
                    layout='fill'
                    objectFit='cover'
                    className=""
                    src={"https://github.com/RaphaCH.png"}
                    alt="avatar" />
            </div>
            <div className="flex items-center px-6 py-3 bg-beCode">
                <FontAwesomeIcon icon={faCode} className='text-base text-white' />
                <h1 className="mx-3 text-white font-semibold text-lg">{position}</h1>
            </div>
            <div className="py-4 px-6">
                <h1 className="text-xl font-semibold text-gray-800">{firstName} {lastName}</h1>
                <p className="py-2 text-lg text-gray-700">{aboutMe}</p>
                <div className="flex items-center mt-4 text-gray-700">
                    <FontAwesomeIcon icon={faPhone} className="text-base fill-current" />
                    <h1 className="px-2 text-sm">{phone}</h1>
                </div>
                <div className="flex items-center mt-4 text-gray-700">
                    <FontAwesomeIcon icon={faLocationDot} className='text-base fill-current' />
                    <h1 className="px-2 text-sm">{city}</h1>
                </div>
                <div className="flex items-center mt-4 text-gray-700">
                    <FontAwesomeIcon icon={faEnvelope} className='text-base fill-current' />
                    <h1 className="px-2 text-sm">{email}</h1>
                </div>
                {mappedBadges}
            </div>
        </div>
    )
}