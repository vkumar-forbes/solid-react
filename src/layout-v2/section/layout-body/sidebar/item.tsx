import React from "react";

export type SidebarItemType = {
  Icon: React.FC<React.SVGAttributes<HTMLOrSVGElement>>;
  heading: string;
  caption: string;
};

type SidebarItemPropType = SidebarItemType &
  React.HTMLAttributes<HTMLDivElement>;

export default function SidebarItem({
  Icon,
  heading,
  caption,
  ...rest
}: SidebarItemPropType) {
  return (
    <div
      className="flex flex-col md:flex-row items-center md:items-start"
      {...rest}
    >
      <div className="min-w-max mb-2 md:mb-0">
        <Icon className="size-6 md:size-auto" />
      </div>
      <div className="ml-0 md:ml-4">
        <h3 className="text-xs text-center md:text-start md:text-xl font-semibold">
          {heading}
        </h3>
        
        {/* hide caption for small devices  */}
        <p className="hidden md:block text-sm">{caption}</p>
      </div>
    </div>
  );
}
