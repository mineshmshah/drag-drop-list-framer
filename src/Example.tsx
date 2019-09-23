import * as React from "react";
import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { findIndex, Position } from "./find-index";
import move from "array-move";
import Expandable from './Card';

interface ItemProps {
  setPosition: any,
  moveItem: any,
  i: number,
  children: any
}

const Item = ({ setPosition, moveItem, i, ...rest } : ItemProps, ) => {
  const [isDragging, setDragging] = useState(false);

  // We'll use a `ref` to access the DOM element that the `motion.li` produces.
  // This will allow us to measure its height and position, which will be useful to
  // decide when a dragging element should switch places with its siblings.
  const ref = useRef<any>(null);
  // By manually creating a reference to `dragOriginY` we can manipulate this value
  // if the user is dragging this DOM element while the drag gesture is active to
  // compensate for any movement as the items are re-positioned.
  const dragOriginY = useMotionValue(0);
  console.log(dragOriginY)
  // Update the measured position of the item so we can calculate when we should rearrange.
  useEffect(() => {
    setPosition(i, {
      height: ref.current.offsetHeight,
      top: ref.current.offsetTop
    });
  });

  return (
    <motion.li
      ref={ref}
      initial={false}
      // If we're dragging, we want to set the zIndex of that item to be on top of the other items.
      animate={isDragging ? onTop : flat}
      style={{ height: 'auto' }}
      whileHover={{ boxShadow: `0px 1px 4px rgba(0, 0, 0, 0.2)` }}
      // whileTap={{ scale: 1.12 }}
      drag="y"
      dragOriginY={dragOriginY}
      dragConstraints={{ top: 0, bottom: 0 }}
      dragElastic={1}
      onDragStart={() => setDragging(true)}
      onDragEnd={() => setDragging(false)}
      onDrag={(e, { point }) => {
        return moveItem(i, point.y);
      }}
      // onUpdate={({ y, top }) => {
      //   !isDragging && dragOriginY.set((y || top) as number);
      // }}
      positionTransition={({ delta }) => {
      if (isDragging) {
        // If we're dragging, we want to "undo" the items movement within the list
        // by manipulating its dragOriginY. This will keep the item under the cursor,
        // even though it's jumping around the DOM.
        dragOriginY.set(dragOriginY.get() + delta.y);
      }

      // If `positionTransition` is a function and returns `false`, it's telling
      // Motion not to animate from its old position into its new one. If we're
      // dragging, we don't want any animation to occur.
      return !isDragging;
    }}
      {...rest}
    />
  );
};

export const Example = () => {
  // const [colors, setColors] = useState(initialColors);
  const [blocks, setBlocks] = useState(defaultObject);


  // We need to collect an array of height and position data for all of this component's
  // `Item` children, so we can later us that in calculations to decide when a dragging
  // `Item` should swap places with its siblings.
  const positions = useRef<Position[]>([]).current;
  const setPosition = (i: number, offset: Position) => (positions[i] = offset);
  const setChildPosition = (i: number, j: number, offset: Position) => (positions[i]['elements'][j] = offset);

  // Find the ideal index for a dragging item based on its position in the array, and its
  // current drag offset. If it's different to its current index, we swap this item with that
  // sibling.
  const moveItem = (i: number, dragOffset: number) => {
    const targetIndex = findIndex(i, dragOffset, positions);
    if (targetIndex !== i) setBlocks(move(blocks, i, targetIndex));
  };

  return (
    <ul>
      {blocks.map(({header, id}, i) => (
        <Item
          key={id}
          i={i}
          setPosition={setPosition}
          moveItem={moveItem}
          header={header}
        >
          <Expandable title={header}/>
        </Item>
      ))}
    </ul>
  );
};

// Spring configs
const onTop = { zIndex: 1 };
const flat = {
  zIndex: 0,
  transition: { delay: 0.3 }
};

const initialColors = ["#FF008C", "#D309E1", "#9C1AFF"];

const defaultObject = [
  {
    id: 1,
    header: "Header",
    expanded: false,
    error: false,
    elements: [
      {
        id: 1,
        header: "Title",
        component: "text",
        content:{}
      },
      {
        id: 2,
        header: "Text",
        component: "text",
        content:{}
      }
    ]
  },
  {
    id: 2,
    header: "Content",
    expanded: false,
    error: false,
    elements: [
      {
        id: 1,
        header: "Title",
        component: "text",
        content:{}
      },
    ]
  },
  {
    id: 3,
    header: "Some other card that has a longer name",
    expanded: false,
    error: false,
    elements: [
      {
        id: 1,
        header: "Title",
        component: "text",
        content:{}
      },
      {
        id: 2,
        header: "Text",
        component: "text",
        content:{}
      },
      {
        id: 3,
        header: "Another text",
        component: "text",
        content:{}
      }
    ]
  }
];
