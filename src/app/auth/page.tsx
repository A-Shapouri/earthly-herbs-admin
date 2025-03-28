'use client';
import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LockIcon, LoginIcon, MobileIcon } from '../../assets/pb-icons';
import { useDebouncedCallback } from 'use-debounce';
import { AuthActions } from '@store/auth/auth-actions';
import * as motion from 'motion/react-client';
import Button from '@elements/button';
import Div from '@elements/div';
import Text from '@elements/text';
import TextField from '@elements/text-field';
import Checkbox from '@elements/checkbox';
import FormControlLabel from '@elements/form-control-label';

const Login = () => {
  const dispatch = useDispatch();
  const { email, password, loginLoading } = useSelector((state: any) => state.auth);

  const handleUserEmail = useDebouncedCallback((e: any) => {
    const value = e.target.value;
    dispatch(AuthActions.setUserEmailAction({ email: value }));
  }, 500);

  const handleUserPassword = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(AuthActions.setUserPasswordAction({ password: e.target.value }));
  };

  const handleLoginUser = () => {
    dispatch(AuthActions.loginWithPasswordAction());
  };

  return (
    <Div className={'flex-col justify-center md:w-2/3 w-full gap-8 md:gap-8'}>
      <Text type={'bold'} align={'center'} color={'grey.800'} typography={['xl', 'xl']}>
        Admin Panel
      </Text>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={'flex flex-col w-full'}>
        <TextField
          rounded={'small'}
          color={'slate'}
          className={'w-full'}
          variant={'outlined'}
          label={'Email'}
          placeholder={'Email'}
          placeholderPosition={'left'}
          type={'email'}
          endAdornment={<MobileIcon/>}
          inputClassName={'sm:!text-t-lg tracking-1 placeholder-shown:tracking-normal'}
          onChange={handleUserEmail}
        />
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className={'flex flex-col w-full'}>
        <TextField
          rounded={'small'}
          autoComplete={'new-password'}
          color={'slate'}
          className={'w-full'}
          variant={'outlined'}
          label={'Password'}
          placeholder={'Password'}
          type={'password'}
          endAdornment={<LockIcon/>}
          inputClassName={'sm:!text-t-lg tracking-[12px] placeholder-shown:tracking-normal'}
          onChange={handleUserPassword}
        />
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.6 }}
        className={'flex flex-col w-full'}>
        <Div className={'flex-col'}>
          <Div className={'flex-wrap sm:items-center'}>
            <FormControlLabel textProps={{ typography: ['sm', 'sm'], color: 'grey.800', type: 'medium' }}
              label={'Remember Me'} className={'flex gap-1 items-center w-fit'}>
              <Checkbox
                checked={true}
                color={'slate'}
              />
            </FormControlLabel>
          </Div>
        </Div>
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.9 }}
        className={'flex flex-col w-full'}>
        <Button
          size={'large'}
          color={'slate'}
          rounded={'small'}
          className={'gap-x-2 w-full z-50'}
          onClick={handleLoginUser}
          loading={loginLoading}
          disabled={loginLoading || !(email && password)}>
          <LoginIcon/>
            Login
        </Button>
      </motion.div>
    </Div>
  );
};
export default Login;
