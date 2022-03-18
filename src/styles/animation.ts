import { Flex, FlexProps, Popover, PopoverProps, PopoverContent, PopoverContentProps  } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export const animationFlex = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: .5,
        staggerChildren: .2,
        duration: 1
      }
    }
  }

export const itemAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      duration: 1
    }
  }

export const MotionFlex = motion<FlexProps>(Flex);
export const PopoverFlex = motion<PopoverProps>(Popover); 
export const PopoverContentFlex = motion<PopoverContentProps>(PopoverContent);