import {Component, Input} from '@angular/core';

interface TreeNode {
  id: number;
  name: string;
  children?: TreeNode[];
  isExpanded?: boolean;
  isActive?: boolean;
}

@Component({
  selector: 'app-role-treeview',
  templateUrl: './role-treeview.component.html',
  styleUrl: './role-treeview.component.scss'
})
export class RoleTreeviewComponent {
  @Input() data: Array<{ id: number; name: string }> = [];
  @Input() useMonochrome: boolean = false;
  @Input() disableToggles: boolean = false;
  @Input() hideToggles: boolean = false;

  treeData: TreeNode[] = [];

  ngOnInit(): void {
    this.treeData = this.buildTree(this.data);
  }

  uniqueRootCategories(nodes: Array<{ id: number; name: string }>): string[] {
    const categorySet = new Set<string>();
    nodes.forEach(node => {
      const segments = node.name.split("_");
      const lastSegment = segments[segments.length - 1];
      categorySet.add(lastSegment);
    });
    return Array.from(categorySet);
  }

  // buildTree(nodes: Array<{ id: number; name: string }>): TreeNode[] {
  //   const categories = this.uniqueRootCategories(nodes); // Extracting root categories based on the last segment
  //   const tree: TreeNode[] = categories.map(category => ({
  //     id: Math.random(),
  //     name: category,
  //     children: []
  //   }));
  //
  //   nodes.forEach(node => {
  //     const segments = node.name.split("_");
  //     const categorySegment = segments[segments.length - 1]; // Last segment for root category
  //     const mainCategoryName = segments[0]; // First segment for sub-category under the root
  //
  //     const rootNode = tree.find(root => root.name === categorySegment);
  //     if (rootNode) {
  //       let mainCategory = rootNode.children!.find(c => c.name === mainCategoryName);
  //       if (!mainCategory) {
  //         mainCategory = { id: Math.random(), name: mainCategoryName, children: [] };
  //         rootNode.children!.push(mainCategory);
  //       }
  //       mainCategory.children!.push({
  //         id: node.id,
  //         name: node.name,
  //         children: []
  //       });
  //     }
  //   });
  //
  //   return tree;
  // }
  buildTree(nodes: Array<{ id: number; name: string }>): TreeNode[] {
    const categories = this.uniqueRootCategories(nodes); // Assumes this function is correctly implemented
    const tree: TreeNode[] = categories.map(category => ({
      id: Math.random(),
      name: category,
      children: []
    }));

    nodes.forEach(node => {
      const segments = node.name.split("_");
      const categorySegment = segments[segments.length - 1]; // Last segment for root category
      const mainCategoryName = segments[0]; // First segment for main category under the root

      const rootNode = tree.find(root => root.name === categorySegment);
      if (rootNode) {
        let mainCategory = rootNode.children!.find(c => c.name === mainCategoryName);
        if (!mainCategory) {
          mainCategory = { id: Math.random(), name: mainCategoryName, children: [] };
          rootNode.children!.push(mainCategory);
        }

        // Create the display name excluding the last segment in all cases
        let displayName = segments.slice(1, -1).join(" ");
        if (displayName === "") { // If there are only two segments, use the first one as the displayName
          displayName = segments[0];
        }

        mainCategory.children!.push({
          id: node.id,
          name: displayName,
          children: []
        });
      }
    });

    return tree;
  }




  toggleAllChildren(node: TreeNode, isActive: boolean): void {
    node.isActive = isActive;
    if (node.children) {
      node.children.forEach(child => {
        child.isActive = isActive;
        this.toggleAllChildren(child, isActive);
      });
    }
  }

}
