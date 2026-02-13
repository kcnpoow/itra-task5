import { useEffect, useRef } from "react";

import { Spinner } from "../shadcn/components/ui/spinner";

interface Props {
  onNext: () => void;
}

export const InfiniteScroll = ({ onNext }: Props) => {
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onNext();
        }
      },
      { threshold: 1.0 },
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [targetRef]);

  return (
    <div className="flex justify-center py-12">
      <div ref={targetRef}>
        <Spinner />
      </div>
    </div>
  );
};
