// CardComponent.jsx
import { Card } from '@/app/components/cards';
import Link from 'next/link';

const CardComponent = ({ project  } : any) => {
    const { link, time, languages, name, description, Glink } = project;

    return (
        <Card>
            <Link target="_blank" href={link}>
                <article className="relative w-full h-full p-4 md:p-8">
                    <div className="flex items-center justify-between gap-3">
                        <div className="text-base text-zinc-100">
                            <span className="hidden text-zinc-100 md:block">{time}</span>
                        </div>
                        <div className='text-white text-3xl'>
                            |
                        </div>
                        <span className="flex items-end gap-1 text-base text-zinc-500">
                            <span className="hidden text-zinc-100 md:block">{languages}</span>
                        </span>
                    </div>

                    <h2
                        id="featured-post"
                        className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                    >
                        {name}
                    </h2>
                    <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                        {description}
                    </p>
                    <p>
                        <Link target="_blank" href={Glink}>GitHub </Link><span aria-hidden="true">&rarr;</span>
                    </p>
                </article>
            </Link>
        </Card>
    );
};

export default CardComponent;
