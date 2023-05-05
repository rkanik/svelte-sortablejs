<script lang="ts">
	import store from './store.js';
	import Sortable from 'sortablejs';
	import { insertNodes, removeNodes, createCustoms, handleStateChanges } from './util.js';

	export let list: any[] = [];
	export let setList: Function;

	let sortable: Sortable = null!;
	const useCreate = (el: HTMLDivElement) => {
		sortable = Sortable.create(el, {
			animation: 150,
			onMove(evt) {
				return ![evt.dragged, evt.related].some((el) => {
					return ['0', 'false'].includes(el?.getAttribute('data-draggable') || '');
				});
			},
			onUpdate(evt) {
				const customs = createCustoms(evt, list);
				removeNodes(customs);
				insertNodes(customs);
				const newList = handleStateChanges(customs, list);
				return setList(newList, sortable, $store);
			}
		});
	};

	let clazz = '';
	export { clazz as class };
</script>

<div use:useCreate class={clazz}>
	<slot />
</div>
