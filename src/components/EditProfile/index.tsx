import { FC, useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { RootState } from '@/store';
import Edit from '@/assets/images/edit.png';
import { UserInfoType } from '@/store/user/slice';
import Textfield from '../common/Textfield';
import { saveUserInfo, fetchUserInfo } from '@/store/user/action';
import DateField from '../common/DateField';
import { useAppDispatch } from '@/store';

interface ErrorType {
  id?: number;
  username?: string;
  name?: string;
  email?: string;
  image?: string;
  password?: string;
  dob?: string;
  address?: string;
  permanentAddress?: string;
  city?: string;
  postalCode?: string;
  country?: string;
}

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
  const [errors, setErrors] = useState<ErrorType>({});
  const { user, isLoading } = useSelector((root: RootState) => root.user);
  const dispatch = useAppDispatch();

  const validationSchema = Yup.object({
    username: Yup.string().required('Name is required'),
    name: Yup.string()
      .min(4, 'Username must be at least 4 characters')
      .required('Username is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
        'Password must me 8 characters long including 1 Number, 1 Uppercase and lowercase letter'
      )
      .required('Password is required'),
    dob: Yup.string(),
    address: Yup.string().required('Present Address is required'),
    permanentAddress: Yup.string().required('Permanent Address is required'),
    city: Yup.string().required('City is required'),
    postalCode: Yup.string()
      .matches(/^\d{5}$/, 'Postal code must be 5 characters')
      .required('Postal Code is required'),
    country: Yup.string().required('Country is required'),
  });

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
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await validationSchema.validate(userInfo, { abortEarly: false });

      const payload = {
        ...userInfo,
        id: userInfo?.id,
      };
      await dispatch(saveUserInfo(payload));
      setErrors({});
      toast.success('Profile saved successfully');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = err?.inner?.reduce(
          (acc: { [key: string]: string }, error: Yup.ValidationError) => {
            if (error?.path) {
              acc[error.path] = error.message;
            }
            return acc;
          },
          {}
        );
        setErrors(errorMessages);
      }
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
              aria-hidden="true"
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
              required={true}
              errorMessage={errors?.name ? errors.name : ''}
            />
            <Textfield
              value={userInfo?.username}
              onChange={handleInputChange}
              name="username"
              placeholder="Username"
              required={true}
              label="User Name"
              classNames="w-full md:w-1/2"
              errorMessage={errors?.username ? errors?.username : ''}
            />
          </div>
          <div className="flex items-center flex-col md:flex-row gap-[29px] mb-4 md:mb-6">
            <Textfield
              value={userInfo?.email}
              onChange={handleInputChange}
              name="email"
              placeholder="Email"
              required={true}
              label="Email"
              classNames="w-full md:w-1/2"
              type="email"
              errorMessage={errors?.email ? errors?.email : ''}
            />
            <Textfield
              value={userInfo?.password}
              onChange={handleInputChange}
              name="password"
              type="password"
              placeholder="password"
              required={true}
              label="Password"
              classNames="w-full md:w-1/2"
              errorMessage={errors?.password ? errors?.password : ''}
            />
          </div>
          <div className="flex items-center flex-col md:flex-row gap-[29px] mb-4 md:mb-6">
            <DateField
              value={userInfo?.dob}
              onChange={handleInputChange}
              name="dob"
              placeholder="Date of Birth"
              label="Date of Birth"
              classNames="w-full md:w-1/2"
            />
            <Textfield
              value={userInfo?.address}
              onChange={handleInputChange}
              name="address"
              placeholder="Present address"
              label="Present Address"
              required={true}
              classNames="w-full md:w-1/2"
              errorMessage={errors?.address ? errors?.address : ''}
            />
          </div>
          <div className="flex items-center flex-col md:flex-row gap-[29px] mb-4 md:mb-6">
            <Textfield
              value={userInfo?.permanentAddress}
              onChange={handleInputChange}
              name="permanentAddress"
              placeholder="Permanent Address"
              label="Permanent Address"
              required={true}
              classNames="w-full md:w-1/2"
              errorMessage={
                errors?.permanentAddress ? errors?.permanentAddress : ''
              }
            />
            <Textfield
              value={userInfo?.city}
              onChange={handleInputChange}
              name="city"
              placeholder="City"
              label="City"
              required={true}
              classNames="w-full md:w-1/2"
              errorMessage={errors?.city ? errors?.city : ''}
            />
          </div>
          <div className="flex items-center flex-col md:flex-row gap-[29px] mb-4 md:mb-6">
            <Textfield
              value={userInfo?.postalCode}
              onChange={handleInputChange}
              name="postalCode"
              placeholder="Postal Code"
              label="Postal Code"
              required={true}
              classNames="w-full md:w-1/2"
              type="number"
              errorMessage={errors?.postalCode ? errors?.postalCode : ''}
            />
            <Textfield
              value={userInfo?.country}
              onChange={handleInputChange}
              name="country"
              placeholder="Country"
              label="Country"
              required={true}
              classNames="w-full md:w-1/2"
              errorMessage={errors?.country ? errors?.country : ''}
            />
          </div>
        </div>
      </div>{' '}
      <button
        type="submit"
        aria-label="Save profile data"
        disabled={isLoading}
        className="hover:shadow-lg hover:font-semibold block w-full md:w-[190px] py-[14px] rounded-[15px] text-center ml-auto mt-4 md:mt-[41px] bg-text text-white font-medium text-[15px] md:text-lg leading-[21.78px]"
      >
        {isLoading ? 'Saving...' : 'Save'}
      </button>
    </form>
  );
};

export default EditProfile;
