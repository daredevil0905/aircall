import { ReactNode, createContext, useContext, useState } from 'react'

interface FeedTypeContextProps {
  selectedFeedType: string
  setSelectedFeedType: React.Dispatch<React.SetStateAction<string>>
}

interface FeedTypeProviderProps {
  children: ReactNode
}

const FeedTypeContext = createContext<FeedTypeContextProps | undefined>(undefined);

export const FeedTypeProvider = ({ children }: FeedTypeProviderProps) => {
  const [selectedFeedType, setSelectedFeedType] = useState('activity');

  return (
    <FeedTypeContext.Provider value={{ selectedFeedType, setSelectedFeedType }}>
      {children}
    </FeedTypeContext.Provider>
  );
};

export const useFeedTypeContext = (): FeedTypeContextProps => {
  const context = useContext(FeedTypeContext);
  if (!context) {
    throw new Error('useFeedTypeContext must be used within a FeedTypeProvider');
  }
  return context;
}
