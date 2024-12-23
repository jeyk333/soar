import { FC, useState } from 'react';

import ContactCardLoader from '../SkeletonLoader/ContactCardLoader';

export interface ContactType {
  id: number;
  name: string;
  designation: string;
  image: string;
}

interface Props {
  contact: ContactType;
  isLoading: boolean;
}

const ContactCard: FC<Props> = ({ contact, isLoading }) => {
  const [selectedContact, setSelectedContact] = useState<number>(0);
  if (isLoading) return <ContactCardLoader />;
  return (
    <div
      onClick={() => setSelectedContact(contact?.id)}
      className="flex flex-col items-center group cursor-pointer text-center w-[100px]"
    >
      <img
        src={contact?.image}
        alt={contact?.name}
        className="mb-4 w-[70px] h-[70px]"
      />
      <p
        className={`text-[16px] text-text group-hover:font-bold ${selectedContact === contact?.id ? 'font-bold' : 'font-normal'}`}
      >
        {contact?.name}
      </p>
      <p
        className={`text-[15px] text-text-label mt-[5px] group-hover:font-bold ${selectedContact === contact?.id ? 'font-bold' : 'font-normal'}`}
      >
        {contact?.designation}
      </p>
    </div>
  );
};

export default ContactCard;
