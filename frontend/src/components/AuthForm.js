
import { Form, Link, useSearchParams, useActionData, useNavigation } from 'react-router-dom';

import classes from './AuthForm.module.css';

function AuthForm() {
  const nav= useNavigation();
  const data = useActionData();
  
  const [searchParam]= useSearchParams();
  const isLogin = searchParam.get('mode')==='login';
  const isSubmitting= nav.state==='submitting';

  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
        {data && data.errors && <ul>
          {Object.values(data.errors).map(e=><li key={e}>{e}</li>)}
          </ul>}
        {data && data.message && <p>{data.message}</p>}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin ? 'signup': 'login'}`}>
            {isLogin ? 'Create new user' : 'login'}
          </Link>
          <button disabled={isSubmitting}>Save</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
