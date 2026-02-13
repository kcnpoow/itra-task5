import { useEffect, useRef } from "react";

import { Spinner } from "../shadcn/components/ui/spinner";

interface Props {
  onNext: () => void;
}

export const InfiniteScroll = ({ onNext }: Props) => {
  const targetRef = useRef(null);

  useEffect(() => {
    const target = targetRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onNext();
        }
      },
      { rootMargin: "200px" },
    );

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [targetRef, onNext]);

  return (
    <div className="flex justify-center py-12">
      <div ref={targetRef}>
        <Spinner />
      </div>
    </div>
  );
};
