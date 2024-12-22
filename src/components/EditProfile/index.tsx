import { FC, useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { RootState } from '@/store';
import Edit from '@/assets/images/edit.png';
import { UserInfoType } from '@/store/user/slice';
import Textfield from '../common/Textfield';
import { saveUserInfo } from '@/store/user/action';

const DEFAULT_STATE: UserInfoType = {
  username: '',
  name: '',
  email: '',
  image: '',
  password: '',
  dob: '',
  address: '',
  permanentAddress: '',
  city: '',
  postalCode: '',
  country: '',
};

const EditProfile: FC = () => {
  const [userInfo, setUserInfo] = useState<UserInfoType>(DEFAULT_STATE);
  const { user, isLoading } = useSelector((root: RootState) => root.user);
  const dispatch = useDispatch();

  useEffect(() => {
    setUserInfo(user ? user : DEFAULT_STATE);
  }, []);
  console.log(userInfo);

  const handleUploadImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e?.target?.files?.[0]) {
      const file = e.target.files[0];
      const urlPath = URL?.createObjectURL(file);
      setUserInfo((prev: UserInfoType) => ({
        ...prev,
        image: urlPath,
      }));
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInfo((prev: UserInfoType) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const payload = {
        ...userInfo,
        id: userInfo?.id,
      };
      await dispatch(saveUserInfo(payload));
      toast.success('Profile saved successfully');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row gap-[57px]">
        <div className="relative w-5/12 md:w-1/12 mx-auto">
          <img
            src={userInfo?.image}
            alt={userInfo?.name}
            className="w-[100px] md:w-[90px] h-[100px] md:h-[90px] rounded-full object-cover"
          />
          <label htmlFor="profile-image">
            <img
              src={Edit}
              alt="edit"
              className="h-[30px] w-[30px] cursor-pointer absolute top-[58px] right-2"
            />
          </label>
          <input
            id="profile-image"
            className="hidden"
            type="file"
            onChange={handleUploadImage}
          />
        </div>
        <div className="w-full md:w-11/12">
          <div className="flex items-center flex-col md:flex-row gap-[29px] mb-[22px]">
            <Textfield
              value={userInfo?.name}
              onChange={handleInputChange}
              name="name"
              placeholder="Your Name"
              label="Your Name"
              classNames="w-full md:w-1/2"
              required
            />
            <Textfield
              value={userInfo?.username}
              onChange={handleInputChange}
              name="username"
              placeholder="Username"
              label="User Name"
              classNames="w-full md:w-1/2"
            />
          </div>
          <div className="flex items-center flex-col md:flex-row gap-[29px] mb-[22px]">
            <Textfield
              value={userInfo?.email}
              onChange={handleInputChange}
              name="email"
              placeholder="Email"
              label="Email"
              classNames="w-full md:w-1/2"
              type="email"
            />
            <Textfield
              value={userInfo?.password}
              onChange={handleInputChange}
              name="password"
              placeholder="password"
              label="Password"
              readOnly={true}
              classNames="w-full md:w-1/2"
            />
          </div>
          <div className="flex items-center flex-col md:flex-row gap-[29px] mb-[22px]">
            <Textfield
              value={userInfo?.dob}
              onChange={handleInputChange}
              name="dob"
              placeholder="Date of Birth"
              label="Date of Birth"
              classNames="w-full md:w-1/2"
              type="date"
            />
            <Textfield
              value={userInfo?.address}
              onChange={handleInputChange}
              name="address"
              placeholder="Present address"
              label="Present Address"
              classNames="w-full md:w-1/2"
            />
          </div>
          <div className="flex items-center flex-col md:flex-row gap-[29px] mb-[22px]">
            <Textfield
              value={userInfo?.permanentAddress}
              onChange={handleInputChange}
              name="permanentAddress"
              placeholder="Permanent Address"
              label="Permanent Address"
              classNames="w-full md:w-1/2"
            />
            <Textfield
              value={userInfo?.city}
              onChange={handleInputChange}
              name="city"
              placeholder="City"
              label="City"
              classNames="w-full md:w-1/22"
            />
          </div>
          <div className="flex items-center flex-col md:flex-row gap-[29px] mb-[22px]">
            <Textfield
              value={userInfo?.postalCode}
              onChange={handleInputChange}
              name="postalCode"
              placeholder="Postal Code"
              label="Postal Code"
              classNames="w-full md:w-1/2"
              type="number"
            />
            <Textfield
              value={userInfo?.country}
              onChange={handleInputChange}
              name="country"
              placeholder="Country"
              label="Country"
              classNames="w-full md:w-1/2"
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="hover:shadow-lg hover:font-semibold block w-full md:w-[190px] py-[14px] rounded-[15px] text-center ml-auto mt-4 md:mt-[41px] bg-text text-white font-medium text-[15px] md:text-lg leading-[21.78px]"
      >
        {isLoading ? 'Saving...' : 'Save'}
      </button>
    </form>
  );
};

export default EditProfile;
