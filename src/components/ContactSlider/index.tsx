import { FC, ElementType, useState, ChangeEvent } from 'react';
import Slider from 'react-slick';

import ContactCard, { ContactType } from '@/components/ContactCard';
import Arrow from '@/assets/images/slide-arrow.png';
import Send from '@/assets/images/send.png';

interface Props {
  contacts: ContactType[];
}

const NextArrow: ElementType = (props: {
  className: string;
  style: object;
  onClick: () => void;
}) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} shadow-arrow !text-text-label !w-[80px] !h-[80px] before:hidden`}
      style={{ ...style }}
      onClick={onClick}
    >
      <img src={Arrow} className="w-[80px] h-[80px]" />
    </div>
  );
};

const ContactSlider: FC<Props> = ({ contacts }) => {
  const [amount, setAmount] = useState<string>('');
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
  };
  return (
    <div>
      <div className="slider-container">
        <Slider {...settings}>
          {contacts?.map((contact: ContactType) => (
            <ContactCard key={contact?.id} contact={contact} />
          ))}
        </Slider>
      </div>
      <div className="flex items-center gap-[25px] md:gap-[27px] mt-[30px]">
        <p className="text-text-label text-xs md:text-base">Write Amount</p>
        <div className="bg-background rounded-[40px] flex items-center gap-[15px] pl-[25px]">
          <input
            value={amount}
            type="number"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setAmount(e.target.value)
            }
            placeholder="535.0"
            className="text-xs md:text-[15px] bg-background w-[60px] md:w-[100px] placeholder:text-primary-light active:outline-none focus:outline-none"
          />
          <button className="-ml-2 shadow-arrow rounded-full px-[21px] md:px-6 py-[13px] bg-text text-[13px] md:text-base text-white flex items-center gap-3">
            <span>Send</span>
            <img src={Send} alt="Send" className="w-[26px] w-[22.6px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactSlider;
