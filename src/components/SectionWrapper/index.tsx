import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  children: ReactNode;
  link?: string;
  linkLabel?: string;
}

const SectionWrapper: FC<Props> = ({ title, children, link, linkLabel }) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-primary text-base md:text-[22px] font-semibold">
          {title}
        </h3>
        {link ? (
          <Link
            to={link}
            className="font-semibold text-[14px] md:text-[17px] hover:underline"
          >
            {linkLabel}
          </Link>
        ) : null}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default SectionWrapper;
