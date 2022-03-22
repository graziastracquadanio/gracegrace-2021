import React, { useEffect, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import { ZINDEX } from 'constants/css-variables';
import { useRootStore } from 'providers/RootStoreProvider';
import { Message, MessageType } from 'types/message';

export const Notificator = observer(function Notificator() {
  const { uiStore } = useRootStore();
  const [lastNotification, setLastNotification] = useState<Message | null | undefined>(null);

  useEffect(() => {
    setLastNotification(uiStore.notification);
  }, [uiStore.notification, setLastNotification]);

  const steps = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <AnimatePresence>
      {lastNotification && (
        <NotificationPopup
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={steps}
          type={lastNotification.type}
        >
          {lastNotification?.text}
        </NotificationPopup>
      )}
    </AnimatePresence>
  );
});

const NotificationPopup = styled(motion.p)<{ type?: MessageType }>`
  position: fixed;
  z-index: ${ZINDEX.notifications};
  bottom: 1rem;
  right: 3rem;
  max-width: 15rem;
  text-align: center;
  background-color: var(--color-${(props) => props.type ?? 'highlight'});
  color: var(--color-${(props) => (props.type ? 'gray-dark' : 'text')});
  border-radius: 5px;
  padding: 0 1rem;
`;
