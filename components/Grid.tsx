import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id="about">
        <BentoGrid>
            {gridItems.map(({ id, title, kind, body, tags, description, className, img, imgClassName, titleClassName, spareImg }) => (
                <BentoGridItem
                    id={id}
                    key={id}
                    kind={kind}
                    title={title}
                    description={description}
                    body={body}
                    tags={tags}
                    className = {className}
                    img = {img}
                    imgClassName = {imgClassName}
                    titleClassName = {titleClassName}
                    spareImg = {spareImg}
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid