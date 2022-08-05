import Header from '../common/Header';

function OtherLayout({ children }) {
  return (
    <div className='container'>
      <Header />
      <div className='content'>{children}</div>
    </div>
  );
}

export default OtherLayout;

