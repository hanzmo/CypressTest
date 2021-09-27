# CypressTest

Covered in this Test is Manual Input for email.

Test Case:

1. Check that the required fields of the signup form behave as expected
  a. Name Field
    -. Assert Field Blank
    -. Assert Error message disappear after fill
  b. Organization Name
    -. Assert Field Blank
    -. Assert Error message disappear after fill
  c. Company Email Address
    -. Assert Field Blank
    -. Assert Error message disappear after fill
  d. Confirm company email address
    -. Assert Field Blank
    -. Assert Error message disappear after fill
  e. Password
    -. Assert Field Blank
    -. Assert Error message disappear after fill
  f. Phone Number
    -. Assert Field Blank
    -. Assert Error message disappear after fill
  g. I Agree
    -. Assert Field Blank
    -. Assert Error message disappear after fill
    
2. Check that the "confirm your email-address" page is displayed after the 
   form submission and includes the email address added by the user in the sign up form.
    -. Assert email same as sign up
    
3. Redirect to correct page
    -. Assert going to Sign In
    -. Assert back to sign up after sign in page
