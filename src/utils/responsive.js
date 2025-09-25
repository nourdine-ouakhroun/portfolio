// Responsive size mappings
export const responsiveSizes = {
    // Heights - Smaller at 1536px
    heights: {
      small: 'h-[2.5rem] sm:h-[2.75rem] md:h-[3rem] lg:h-[3rem] xl:h-[3rem] 2xl:h-[3rem]',
      medium: 'h-[3rem] sm:h-[3.25rem] md:h-[3.5rem] lg:h-[3.5rem] xl:h-[3.75rem] 2xl:h-[3.75rem]',
      large: 'h-[32px] sm:h-[36px] md:h-[40px] lg:h-[40px] xl:h-[42px] 2xl:h-[42px]'
    },
  
    // Icon sizes - Smaller at 1536px
    icons: {
      xs: 'w-[10px] h-[10px] sm:w-[11px] sm:h-[11px] md:w-[12px] md:h-[12px] lg:w-[13px] lg:h-[13px] xl:w-[14px] xl:h-[14px] 2xl:w-[14px] 2xl:h-[14px]',
      sm: 'w-[14px] h-[14px] sm:w-[15px] sm:h-[15px] md:w-[16px] md:h-[16px] lg:w-[17px] lg:h-[17px] xl:w-[18px] xl:h-[18px] 2xl:w-[18px] 2xl:h-[18px]',
      md: 'w-[16px] h-[16px] sm:w-[17px] sm:h-[17px] md:w-[18px] md:h-[18px] lg:w-[20px] lg:h-[20px] xl:w-[20px] xl:h-[20px] 2xl:w-[20px] 2xl:h-[20px]',
      lg: 'w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] md:w-[22px] md:h-[22px] lg:w-[24px] lg:h-[24px] xl:w-[24px] xl:h-[24px] 2xl:w-[24px] 2xl:h-[24px]'
    },
  
    // Text sizes - Much smaller at 1536px
    text: {
      xs: 'text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-sm',
      sm: 'text-sm sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base',
      md: 'text-[10px] sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm',
      lg: 'text-xs sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base'
    },
  
    // Gaps - More reasonable spacing
    gaps: {
      sm: 'gap-1 sm:gap-1.5 md:gap-2 lg:gap-2 xl:gap-2.5 2xl:gap-3',
      md: 'gap-2 sm:gap-2.5 md:gap-3 lg:gap-3.5 xl:gap-4 2xl:gap-4',
      lg: 'gap-3 sm:gap-4 md:gap-4 lg:gap-5 xl:gap-5 2xl:gap-6'
    },
  
    // Margins - More balanced spacing
    margins: {
      container: 'ml-4 sm:ml-6 md:ml-8 lg:ml-10 xl:ml-12 2xl:ml-14',
      icon: 'mr-2 sm:mr-2.5 md:mr-3 lg:mr-3 xl:mr-3.5 2xl:mr-4'
    },
  
    // Image sizes - Smaller at 1536px
    images: {
      profile: 'w-[12rem] xs:w-[14rem] sm:w-[16rem] md:w-[18rem] lg:w-[18rem] xl:w-[20rem] 2xl:w-[20rem]'
    },
    
    // Container widths
    containers: {
      sidebar: 'min-w-[14rem] sm:min-w-[15rem] md:min-w-[16rem] lg:min-w-[17rem] xl:min-w-[18rem] 2xl:min-w-[19rem]',
      content: 'w-[12rem] sm:w-[14rem] md:w-[15rem] lg:w-[17rem] xl:w-[19rem] 2xl:w-[21rem]'
    }
  };
  
  // Utility function to combine multiple responsive classes
  export const responsiveClass = (...classes) => classes.filter(Boolean).join(' ');
  
  // Component-specific responsive configurations
  export const componentConfig = {
  contactItem: {
    container: `${responsiveSizes.heights.small} flex justify-start items-center ${responsiveSizes.gaps.sm}`,
    icon: responsiveSizes.icons.xs,
    text: `text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs xl:text-xs 2xl:text-xs text-light-gray`
  },
    
    bioHeader: {
      icon: responsiveSizes.icons.md,
      text: `${responsiveSizes.text.sm} text-light-gray`,
      margin: responsiveSizes.margins.icon
    },
    
    writer: {
      lineNumber: 'text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-base',
      content: 'text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs 2xl:text-sm'
    },
    
    categoryItem: {
      container: 'h-[32px] sm:h-[36px] md:h-[38px] lg:h-[38px] xl:h-[40px] 2xl:h-[40px]',
      icon: 'w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] md:w-[14px] md:h-[14px] lg:w-[14px] lg:h-[14px] xl:w-[15px] xl:h-[15px] 2xl:w-[15px] 2xl:h-[15px]',
      text: 'text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-sm'
    }
  };