import Avatar from '../assets/image-avatar.png'

const creatorData = {
  avatar: Avatar,
  creator: 'Jules Wyvern',
  link: '#',
}

export const Creator = () => {
  return (
    <div className="flex items-center gap-4">
      <img
        className="max-w-[33px] max-h-[33px] border border-white rounded-full"
        src={creatorData.avatar}
        alt="Avatar"
      />
      <h4 className="text-softBlue leading-6">
        Creation of{' '}
        <a
          className="text-white hover:text-toxicGreen duration duration-500"
          href={creatorData.link}
        >
          {creatorData.creator}
        </a>
      </h4>
    </div>
  )
}
