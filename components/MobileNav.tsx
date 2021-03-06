import React, { FC } from 'react';
import FullscreenModal from './FullscreenModal';

interface Props {
  open: boolean;
  setOpen: (p: boolean) => void;
}

const MobileNav: FC<Props> = ({ open = false, setOpen }) => {
  return (
    <FullscreenModal open={open} onClose={() => setOpen(false)}>
      <div className="flex justify-center h-full monument font-black text-2xl tracking-widest uppercase">
        <ul className="w-full flex flex-col justify-center items-center">
          <li className="my-3">
            <a href="https://blog.jdc.dev">Tech Blog</a>
          </li>
          <li className="my-3">
            <a href="https://mirror.xyz/xiv.eth">Mirror</a>
          </li>
          <li className="my-3">
            <a href="https://xiv.eth.xyz">xiv.eth</a>
          </li>
          <li className="my-3">
            <a href="mailto:jacob@jdc.dev">Email</a>
          </li>
        </ul>
      </div>
    </FullscreenModal>
  );
};

export default MobileNav;
