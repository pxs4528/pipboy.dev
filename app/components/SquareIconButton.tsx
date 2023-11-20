import Image from 'next/image';

const SquareIconButton = (props: {
    color: string;
    icon: string;
    text: string;
    href: string;
}) => {
    return (
        <div className="mx-2 items-center md:mx-4 lg:mx-8">
            <a
                className="h-20 w-20 md:h-28 md:w-28 rounded-2xl flex items-center justify-center broder-transparent border-solid cursor-pointer duration-200 hover:border-4 hover:scale-110"
                style={{ backgroundColor: props.color }}
                href={props.href}
                target="_blank"
                rel="noreferrer"
            >
                <div className="h-10 w-10 md:h-20 md:w-20 relative">
                    <Image
                        src={props.icon}
                        fill
                        style={{objectFit:"contain"}}
                        alt={props.icon}
                    />
                </div>
            </a>
            <div className="w-20 md:w-36 text-white md:text-2xl font-bold mt-2">{props.text}</div>
        </div>
    );
};

export default SquareIconButton;