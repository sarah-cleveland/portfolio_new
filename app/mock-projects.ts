import { Project } from './project';
export const PROJECTS: Project[] = [
  {
    type: 'web',
    id: 'AnheuserBuschCareers'
    title: 'Anheuser Busch Careers',
    link: 'http://careers.anheuser-busch.com/',
    peek: 'ab-careers.jpg',
    desktop: 'ab-careers-desktop.jpg',
    tablet: 'ab-careers-tablet.jpg',
    mobile: 'ab-careers-desktop.jpg',
    gif: 'ab-careers.gif',
    content: 'blah blah blah',
    languages: ['Javascript', 'Less', 'Adobe Experience Manager']
  },
  {
    type: 'web',
    id: 'PureMichiganLakeEffect',
    title: 'Pure Michigan Lake Effect',
    link: 'http://www.michigan.org/lakeeffect/',
    image: 'lake-effect.png',
    gif: 'lake-effect.gif',
    content: 'blah blah blah'
  },
  {
    type: 'web',
    id: 'GMCTruckComparison',
    title: 'GMC Truck Comparison',
    link: 'http://www.gmc.com/trucks.html',
    image: 'gmc-trucks-comparison.png',
    gif: 'gmc-trucks-comparison.gif',
    content: 'blah blah blah'
  },
];