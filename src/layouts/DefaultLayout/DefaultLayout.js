import Header from '../common/Header';
import Sidebar from '../common/Sidebar';

function DefaultLayout({ children }) {
  return (
    <div className='container'>
      <Header />
      <Sidebar />
      <div className='content'>{children}</div>
    </div>
  );
}

export default DefaultLayout;

