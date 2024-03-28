"use client";
import { CustomButtonProps } from '@/types';
import Image from 'next/image';

const CustomButton = ({title, containerStyles, handleClick}: CustomButtonProps) => {
<button
disabled={false}
type={'button'}
className={'custom-btn'}
onClick={() => {}}
title='button'>

    <span className={'flex-1'}>
        Title
    </span>
</button>
}

export default CustomButton
