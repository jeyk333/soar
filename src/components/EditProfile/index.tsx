import { FC, useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { RootState } from '@/store';
import Edit from '@/assets/images/edit.png';
import { UserInfoType } from '@/store/user/slice';
import Textfield from '../common/Textfield';
import { saveUserInfo, fetchUserInfo } from '@/store/user/action';
import DateField from '../common/DateField';
import { validatePassword } from '@/utils/passwordValidations';

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
  const [error, setError] = useState<boolean>(false);
  const { user, isLoading } = useSelector((root: RootState) => root.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserInfo());
    setUserInfo(user ? user : DEFAULT_STATE);
  }, []);

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
    if (e.target.name === 'password' && validatePassword(e.target.value)) {
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (validatePassword(userInfo?.password)) {
        const payload = {
          ...userInfo,
          id: userInfo?.id,
        };
        await dispatch(saveUserInfo(payload));
        setError(false);
        toast.success('Profile saved successfully');
      } else {
        setError(true);
      }
    } catch (err) {
      toast.error(`Something went wrong. Please try again! ${err}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col xl:flex-row gap-[57px]">
        <div className="w-5/12 xl:w-1/12 mx-auto">
          <div className="relative w-[100px] md:w-[90px] h-[100px] md:h-[90px]">
            <img
              src={userInfo?.image}
              alt={userInfo?.name}
              className="w-[100px] md:w-[90px] h-[100px] md:h-[90px] rounded-full object-cover"
            />
            <label htmlFor="profile-image">
              <img
                src={Edit}
                alt="edit"
                className="h-[30px] hover:shadow-md rounded-full w-[30px] cursor-pointer absolute bottom-0 right-0"
              />
            </label>
            <input
              id="profile-image"
              className="hidden"
              type="file"
              onChange={handleUploadImage}
            />
          </div>
        </div>
        <div className="w-full xl:w-11/12">
          <div className="flex items-center flex-col md:flex-row gap-[29px] mb-4 md:mb-6">
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
              required
              classNames="w-full md:w-1/2"
            />
          </div>
          <div className="flex items-center flex-col md:flex-row gap-[29px] mb-4 md:mb-6">
            <Textfield
              value={userInfo?.email}
              onChange={handleInputChange}
              name="email"
              placeholder="Email"
              label="Email"
              classNames="w-full md:w-1/2"
              type="email"
              required
            />
            <Textfield
              value={userInfo?.password}
              onChange={handleInputChange}
              name="password"
              required
              type="password"
              placeholder="password"
              label="Password"
              classNames="w-full md:w-1/2"
              errorMessage={
                error
                  ? 'Password must be at least 8 characters long, include 1 number, 1 uppercase letter, 1 lowercase letter, and 1 special character.'
                  : ''
              }
            />
          </div>
          <div className="flex items-center flex-col md:flex-row gap-[29px] mb-4 md:mb-6">
            <DateField
              value={userInfo?.dob}
              onChange={handleInputChange}
              name="dob"
              required
              placeholder="Date of Birth"
              label="Date of Birth"
              classNames="w-full md:w-1/2"
            />
            <Textfield
              value={userInfo?.address}
              onChange={handleInputChange}
              name="address"
              required
              placeholder="Present address"
              label="Present Address"
              classNames="w-full md:w-1/2"
            />
          </div>
          <div className="flex items-center flex-col md:flex-row gap-[29px] mb-4 md:mb-6">
            <Textfield
              value={userInfo?.permanentAddress}
              onChange={handleInputChange}
              name="permanentAddress"
              placeholder="Permanent Address"
              required
              label="Permanent Address"
              classNames="w-full md:w-1/2"
            />
            <Textfield
              value={userInfo?.city}
              onChange={handleInputChange}
              name="city"
              placeholder="City"
              required
              label="City"
              classNames="w-full md:w-1/2"
            />
          </div>
          <div className="flex items-center flex-col md:flex-row gap-[29px] mb-4 md:mb-6">
            <Textfield
              value={userInfo?.postalCode}
              onChange={handleInputChange}
              name="postalCode"
              required
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
              required
              label="Country"
              classNames="w-full md:w-1/2"
            />
          </div>
        </div>
      </div>{' '}
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
