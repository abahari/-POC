import { Push } from '../components/';

export default {
    title: 'Push',
    component: Push,
  }
  
  const Template = (args) => <Push {...args} />;
  
  export const Default = Template.bind({});
  Default.args = {
     editoText: 'Discover creations from the COCO CRUSH collection by booking an appointment with a Sales Advisor.',
     CTAText: 'Book an appointment',
     CTALink: 'https://www.chanel.com/us/book-an-appointment/',
     imageURL: 'http://www.chanel.com/us/img/t_one/q_auto:good,fl_lossy,dpr_1.2,f_auto/w_960/prd-emea/sys-master/content/P1/hff/h2d/9534524719134-EDITORIAL-PUSH_OAB_ONE_DESK_974x1298.jpg',
     extraClasses : 'push-banner',
  };
