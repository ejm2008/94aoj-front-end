import React from 'react';
import { MakeAuthentication } from '../../usecases/AuthenticationFactory';
import Login from '../../../../presentation/pages/login/index';
import { ValidationComposite } from '../../../../validation/composities';
import { ValidationBuilder } from '../../../../validation/builders';
import { MakeCurrentAccountAdapter } from '../../cache/currentAccountAdapterFactory';

const validationComposite = ValidationComposite.build([
  ...ValidationBuilder.field("email").required().email().build(),
  ...ValidationBuilder.field("password").required().min(3).build(),
]);

const LoginFactory = () => {
  return (
    <Login 
      authentication={MakeAuthentication()} 
      currentAccount={MakeCurrentAccountAdapter()}
      validation={validationComposite}
    />
  );
};

export default LoginFactory;