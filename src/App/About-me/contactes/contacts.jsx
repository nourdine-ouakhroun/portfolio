import { responsiveClass, componentConfig, responsiveSizes } from '../../../utils/responsive.js';
import data from '/src/data.json';

function Component({ img, text, type }) {
  const { container, text: textClass } = componentConfig.contactItem;
  
  const getHref = () => {
    if (type === 'email') return `mailto:${text}`;
    if (type === 'phone') return `tel:${text}`;
    return null;
  };

  const content = (
    <>
      <div className="w-6 h-6 bg-custom-gray/60 backdrop-blur-sm rounded-lg flex items-center justify-center border border-light-green/20 group-hover:border-light-green/50 group-hover:bg-light-green/10 transition-all duration-300">
        <img src={img} alt="" className={responsiveClass(responsiveSizes.icons.xs, 'group-hover:scale-110 transition-transform duration-300')} />
      </div>
      <span className={responsiveClass(textClass, 'break-all leading-tight group-hover:text-light-green transition-colors duration-300')}>{text}</span>
    </>
  );

  if (getHref()) {
    return (
      <a 
        href={getHref()} 
        className={responsiveClass(
          'group flex items-center gap-2 p-2 rounded-lg hover:bg-custom-gray/20 transition-all duration-300 w-full hover:scale-[1.02]', 
          container
        )}
      >
        {/* Link indicator */}
        <div className="w-1 h-6 bg-light-green/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Contact info */}
        <div className="flex items-center gap-2 flex-1">
          {content}
        </div>
        
        {/* External link icon */}
        <svg className="w-4 h-4 text-light-gray/60 group-hover:text-light-green group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={type === 'email' ? "M12 19l9 2-9-18-9 18 9-2zm0 0v-8" : "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"} />
        </svg>
      </a>
    );
  }

  return (
    <div className={responsiveClass('w-[95%] max-w-[180px]', container)}>
      {content}
    </div>
  );
}

function Contacts() {
  return (
    <div className={responsiveClass(
      'flex flex-col justify-center items-start', 
      'gap-0 sm:gap-0 md:gap-0'
    )}>
      <Component img="/assets/mail-icon.svg" text={data.contact.email} type="email"/>
      <Component img="/assets/phone-icon.svg" text={data.contact.phone} type="phone"/>
      <Component img="/assets/phone-icon.svg" text={data.contact.phone2} type="phone"/>
    </div>
  );
}

export default Contacts;